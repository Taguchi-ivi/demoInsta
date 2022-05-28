module  ArticleDecorator
    def display_created_at
        # binding.pry
        I18n.l(self.created_at, format: :default)
    end
end