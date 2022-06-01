# 没
module ProfilesHelper
    def add_js_data(path)
        `, current_user_id: #{current_user.id}` if current_page?(path)
    end
end