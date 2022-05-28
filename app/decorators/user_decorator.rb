# frozen_string_literal: true

module UserDecorator
    def avatar_image(user)
        current_user = user
        if current_user&.avatar&.attached?
            current_user.avatar
        else
            'def-avatar.png'
        end
    end
end
