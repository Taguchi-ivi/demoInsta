# ファイル名を複数形にする

FactoryBot.define do
    factory :article do
        content { Faker::Lorem.characters(number: 10) }
    end
end