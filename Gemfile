source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 6.0.4', '>= 6.0.4.7'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
# gem 'webpacker', '~> 4.0'
# 修正
gem 'webpacker', '~> 5.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Faker
# https://github.com/faker-ruby/faker
gem 'faker'

# Hamlよりも早い.使う用
# 変換コマンド  bundle exec rake haml:replace_erbs
gem 'hamlit'

# モデルに現在のDB構造をメモする機能
gem 'annotate'

# エラーメッセージとログの見方
gem 'better_errors'
gem 'binding_of_caller'

# ログイン機能実装
gem 'devise'

# Serializer jsonデータを取得
gem 'active_model_serializers'

# viewの見た目部分のメソッドを定義する
gem 'active_decorator'

# 非同期処理
gem 'sidekiq'

# AWS S3
gem 'aws-sdk-s3', require: false


# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  #デバッグ
  gem 'pry-byebug'

  # テストを実施
  gem 'rspec-rails'

  gem 'factory_bot_rails'

  gem 'dotenv-rails'
  
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  # gem 'spring'
  # gem 'spring-watcher-listen', '~> 2.0.0'

  # Haml変換用
  gem 'erb2haml'
  
  # Mailer 送信したメール内容を分かりやすく表示してくれる
  gem 'letter_opener'

  # Mailer 送信したメール内容をweb上で分かりやすく表示する
  gem 'letter_opener_web', '~> 1.0'

end

group :test do

  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'

  gem 'webdrivers'

end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
