Rails.application.routes.draw do
  root to: redirect("/posts")
  resources :posts
  resources :comments
  resources :categories
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
