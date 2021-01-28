Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :articles, except: [:new, :edit]
  resources :users, except: [:new, :edit]
  resources :categories, except: [:new, :edit]
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
  get 'users/:id/toggle_admin', to: 'users#toggle_admin'
end
