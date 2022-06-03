# ファイル名を複数形にする

FactoryBot.define do
    factory :user do
        email { Faker::Internet.free_email }
        password { 'password' }
        account { Faker::Name.name }
    end

    trait :with_profile do
        after :build do |user|
            build(:profile, user: user)
        end
    end
end