class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_id, :category_ids
  def category_ids
    category_ids = self.object.categories.ids
  end
  #has_many :categories


#def category_ids
#  arr = self.object.categories
#  result = {}
#  arr.each do |category|
#    result[category.id] = category
#  end
#  return result
#end
end