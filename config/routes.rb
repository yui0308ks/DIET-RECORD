Rails.application.routes.draw do
  devise_for :users
  root to: 'tops#index'
  resources :posts, except: :index
  resources :users, only: :show
end
