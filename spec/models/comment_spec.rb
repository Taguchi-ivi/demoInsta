require 'rails_helper'

RSpec.describe Comment, type: :model do
    
    let!(:user) { create(:user) }
    let!(:article) { create(:article, user: user) }

    # 前提条件
    context 'コメントが入力されている場合' do

        user1 = FactoryBot.create(:user)
        let!(:comment){ build(:comment, user_id: user1.id, article: article) }
        it 'コメントを保存できる' do
            expect(comment).to be_valid
        end
    end

    context 'コメントが入力されていない場合' do
        
        user1 = FactoryBot.create(:user)
        let!(:comment){ build(:comment, content: '', user_id: user1.id, article: article) }

        before do
            comment.save
        end

        it 'コメントを保存できない' do
            # article.save
            expect(comment.errors.messages[:content][0]).to eq('を入力してください')
        end
    end


end
