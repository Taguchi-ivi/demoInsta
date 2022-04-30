Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "home#index"

  # devise controllerへの設定
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions:      'users/sessions'
  }
  get '/users/sign_out' => 'devise/sessions#destroy'

  resource :profile, only: [:show, :update, :create, :destroy]
end
