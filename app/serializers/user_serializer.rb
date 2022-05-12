class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :account, :avatar_url
  # attributes :id
  
  def avatar_url
    if object.avatar.attached?
      url_for(object.avatar) 
    else
      '/assets/def-avatar.png'
    end
  end
end
