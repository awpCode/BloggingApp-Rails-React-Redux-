class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :article_ids
  def article_ids
    article_ids = self.object.articles.ids
  end
  #has_many :articles
  
end
