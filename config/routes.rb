Rails.application.routes.draw do

  root 'sessions#new'


  resources :apps, only: [:index, :create, :new, :destroy]
  resources :admins, only: [:index]
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]


  namespace :api, defaults: { format: :json }, constraints: { subdomain: 'api' }, path: '/' do
    scope module: :v1 do
      # We are going to list our resources here
    end
  end
end
