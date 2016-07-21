Rails.application.routes.draw do
  root to: redirect("/home")

  resources :home
  resources :jobs
  resources :meetups
  resources :posts
end
