# == Schema Information
#
# Table name: profiles
#
#  id           :bigint           not null, primary key
#  birthday     :date
#  gender       :integer
#  introduction :text
#  nickname     :string
#  subscribed   :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :bigint           not null
#
# Indexes
#
#  index_profiles_on_user_id  (user_id)
#
class Profile < ApplicationRecord
    include Rails.application.routes.url_helpers
    enum gender: { male: 0, female: 1, other: 2 }


    belongs_to :user

    # userに移動
    # has_one_attached :avatar

    def avatar_url
        # 紐づいている画像のurlを取得する
        avatar.attached? ? url_for(avatar) : nil
    end

    
end
