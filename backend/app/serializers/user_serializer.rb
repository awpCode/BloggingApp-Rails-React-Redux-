class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin, :article_ids
  def article_ids
    article_ids = self.object.articles.ids
  end
end
