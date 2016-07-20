Rails.application.routes.draw do
  root to: redirect("/homes")
  resources :homes
  resources :jobs
  resources :meetups
  resources :posts
end
