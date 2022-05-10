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
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable

  # ユニークに
  validates :account, presence: true, uniqueness: true

  has_one :profile, dependent: :destroy
  has_many :articles, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  # avatarをuserモデルに
  has_one_attached :avatar


  def has_liked?(article)
    likes.exists?(article_id: article.id)
  end

  def prepare_profile
    profile || build_profile
  end

  def avatar_image(user)
    current_user = user
    if current_user&.avatar&.attached?
      current_user.avatar
    else
      'def-avatar.png'
    end
  end

end
