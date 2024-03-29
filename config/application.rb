require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DemoInsta
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    if Rails.env.development? || Rails.env.test?
      Bundler.require(*Rails.groups)
      Dotenv::Railtie.load
      # HOSTNAME = ENV['HOSTNAME']
    end
    # 追加
    # config.action_controller.forgery_protection_origin_check = false


    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.i18n.default_locale = :ja
    # config.i18n.default_locale = :en

    routes.default_url_options[:host] = 'http://localhost:3000' # 追加

    # sidekiq
    config.active_job.queue_adapter = :sidekiq


    # Don't generate system test files.
    config.generators.system_tests = nil
  end
end
