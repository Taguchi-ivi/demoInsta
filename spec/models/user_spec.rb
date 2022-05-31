require 'rails_helper'

RSpec.describe User, type: :model do
    # pending "add some examples to (or delete) #{__FILE__}"

    # 確認観点
    # ・正しく内容が入力されていたら登録できること
    # ・アカウント名がないと登録できないこと
    # ・アカウント名に重複が存在した場合エラーになること

    context '正しく入力されている場合' do
        let!(:user) { build(:user) }
        
        it 'ユーザーを登録できる' do
            expect(user).to be_valid
        end
    end

    context '正しく入力されていない場合' do
        
        it 'メールアドレスが空欄だと登録できない' do
            
            user = FactoryBot.build(:user, email: '')
            # user = FactoryBot.create(:user, email: '')
            
            user.valid?
            expect(user.errors.messages[:email][0]).to eq('を入力してください')
        end

        it 'パスワードが空欄だと登録できない' do
            
            user = FactoryBot.build(:user, password: '')
            # user = FactoryBot.create(:user, password: '')
            
            user.valid?
            expect(user.errors.messages[:password][0]).to eq('を入力してください')
        end
        it 'アカウント名が空欄だと登録できない' do
            
            user = FactoryBot.build(:user, account: '')
            
            user.valid?
            expect(user.errors.messages[:account][0]).to eq('を入力してください')
        end

        it 'アカウント名が重複していると登録できない' do
            user1 = FactoryBot.create(:user)
            user2 = FactoryBot.build(:user, account: user1.account)
            
            # before do
            #     user2.save
            # end
            user2.valid?
            expect(user2.errors.messages[:account][0]).to eq('はすでに存在します')
        end
    end

end
