Rails.application.routes.draw do
  root to: redirect("/posts")

  resources :categories do
    resources :posts
  end
  resources :posts do
    resources :comments
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
