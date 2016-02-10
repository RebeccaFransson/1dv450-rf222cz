Rails.application.routes.draw do

  root 'sessions#new'


  get 'apikeys' => 'apps#show', as: :apikeys

  post 'login' => 'sessions#create', as: :login
  get 'logout' => 'sessions#logout', as: :logout

  get 'addApp' => 'apps#new', as: :addApp

  get 'admin' => 'admins#index', as: :admin

  get 'removeApp' => 'apps#remove', as: :removeApp

  resources :apps
  resources :admins, only: [:index]
  resources :sessions, only: [:new, :login, :logout]
  resources :users, only: [:new, :create], path_names: { new: 'register'}

end
