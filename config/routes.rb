Rails.application.routes.draw do
  root to: 'sessions#new'

  resources :comments
  resources :categories do
    resources :posts
  end
  resources :posts do
    resources :comments
  end
  resources :users
  resource  :session

end
