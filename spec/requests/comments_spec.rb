require 'rails_helper'

RSpec.describe 'Comments', type: :request do

  let!(:user) { create(:user) }
  let!(:article) { create(:article, user: user) }
  let!(:comments) { create_list(:comment, 3, user: user ,article: article) }

  describe 'GET /comments' do
    it '200 Status' do
      # get article_comments_path(article_id: article.id)
      get new_article_comment_path(article_id: article.id)
      expect(response).to have_http_status(200)
      # binding.pry

      body = JSON.parse(response.body)
      expect(body.length).to eq 3
      expect(body[0]['content']).to eq comments.first.content
      expect(body[1]['content']).to eq comments.second.content
      expect(body[2]['content']).to eq comments.third.content

    end
  end
end
