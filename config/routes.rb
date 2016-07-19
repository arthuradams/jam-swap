Rails.application.routes.draw do
  root to: redirect("/categories")
  resources :comments
  resources :categories do
    resources :posts
  end
  resources :posts do
    resources :comments
  end
  resources :users
end
