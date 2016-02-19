Rails.application.routes.draw do

  root 'sessions#new'


  resources :apps, only: [:index, :create, :new, :destroy]
  resources :admins, only: [:index]
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

end
