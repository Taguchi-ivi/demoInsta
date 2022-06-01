require 'rails_helper'

RSpec.describe 'Articles', type: :request do

  let!(:user) { create(:user) }
  let!(:articles) { create_list(:article, 3, user: user) }

  describe 'GET /articles' do

    # before do
    #   sign_in user
    # end
    
    it '200ステータスが返ってくる' do
      # ログイン状態にする
      # sign_in user

      get articles_path
      expect(response).to have_http_status(200)
    end
  end
end
