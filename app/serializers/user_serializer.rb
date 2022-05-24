# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  account                :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_account               (account) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
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
