require 'rails_helper'

RSpec.describe 'Article', type: :system do

    let!(:user) { create(:user) }
    let!(:article) { create_list(:article, 3, user: user) }

    it '記事一覧が表示される' do
        # visit=>ブラウザを開きます
        visit root_path

        article.each do |item|
            # そのページにcontentが存在するかどうかを判定している
            # have_content偶然okになってしまうこともある
            # expect(page).to have_content(article.first.content)
            # expect(page).to have_content(item.content)
            expect(page).to have_css('.article-item-text', text: item.content)
        end
    end

    # 複数参照できてしまうため、エラーになる。
    # it '記事一覧からコメント欄へ遷移できる' do
    #     visit root_path

    #     # 指定した文字列のaタグ or ボタンタグぐらいをクリックしてくれる
    #     # click_link 'comment-link'
    #     click_link('comment-link')
    #     # click_on 'comment-link'
        
    #     expect(page).to have_css('.page-header', text: 'Comment')
    # end
end