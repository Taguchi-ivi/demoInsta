require 'rails_helper'

RSpec.describe Article, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  # letを使う場合は、beforeを使わない
  # let!(:user) do
  #   user = User.create!({
  #     email: 'test@example.com',
  #     password: 'password',
  #     account: 'test Taro'
  #   })
  # end

  # 値の塗り替えることができる
  # let!(:user) { create(:user, email: 'text@text.com') }
  let!(:user) { create(:user) }

  # 前提条件
  context '内容が入力されている場合' do

    # binding.pry    
    # before do
    #   user = User.create!({
    #     email: 'test@example.com',
    #     password: 'password',
    #     account: 'test Taro'
    #   })
  
    #   @article = user.articles.build({
    #     content: Faker::Lorem.characters(number: 10)
    #   })
    # end

    # let!(:article) do
    #   user.articles.build({
    #     content: Faker::Lorem.characters(number: 10)
    #   })
    # end
    let!(:article){ build(:article, user: user) }


    it '記事を保存できる' do
      expect(article).to be_valid
    end
  end

  context '内容が入力されていない場合' do
    # let!(:article) do
    #   user.articles.create({
    #     content: ''
    #   })
    # end
    let!(:article){ build(:article, content: '' , user: user) }

    before do
      article.save
    end

    it '記事を保存できない' do
      # article.save
      expect(article.errors.messages[:content][0]).to eq('を入力してください')
    end
  end

end
