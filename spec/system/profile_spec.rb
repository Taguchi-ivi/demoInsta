require 'rails_helper'

RSpec.describe 'Profile', type: :system do
    # let!(:user) { create(:user, :with_profile ) }
    let!(:user) { create(:user ) }

    context 'ログインしている場合' do
        before do
            sign_in user
        end

        it '自身のプロフィールを確認できる' do
            visit profile_path
            expect(page).to have_css('.profile-warapper-center', text: user.account)
        end
    end
end