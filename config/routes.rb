require 'sidekiq/web'

Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # sidekiq
  mount Sidekiq::Web => '/sidekiq' if Rails.env.development?
  # letter_opener
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?

  # root to: "home#index"
  root to: "articles#index"

  # devise controllerへの設定
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions:      'users/sessions'
  }
  get '/users/sign_out' => 'devise/sessions#destroy'

  resources :articles, only: [:index, :show, :new, :create] do
    resource :like, only: [:show, :create, :destroy]
    # resources :comments, only: [:index, :new, :create]
    resources :comments, only: [:new, :create, :index]
  end

  resources :accounts, only: [:show] do
    resource :hasfollow, only: [:show]
    resources :follows, only: [:create, :index]
    resources :unfollows, only: [:create]
  end

  # resource :profile, only: [:show, :update, :create, :destroy]
  resource :profile, only: [:show, :update]
end
