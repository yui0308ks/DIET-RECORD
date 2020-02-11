Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:show,:new]
  root to: 'tops#index'
  resources :posts
  resources :movies
  resources :graphs
end