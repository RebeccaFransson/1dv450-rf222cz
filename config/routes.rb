Rails.application.routes.draw do

  root 'sessions#new'
  
  get 'logout' => 'sessions#logout', as: :logout

  get 'removeApp' => 'apps#remove', as: :removeApp

  resources :apps, only: [:index, :create, :new, :remove], path_names: { index: 'apikeys', new: 'addApp', remove: 'removeApp'}
  resources :admins, only: [:index], path_names: { index: 'admin' }
  resources :sessions, only: [:new, :create, :logout], path_names: { new: 'signin', create: 'login' }
  resources :users, only: [:new, :create], path_names: { new: 'register'}

end
