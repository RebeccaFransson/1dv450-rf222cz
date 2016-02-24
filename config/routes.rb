require 'api_constraints'

Rails.application.routes.draw do

  root 'sessions#new'


  resources :apps, only: [:index, :create, :new, :destroy]
  resources :admins, only: [:index]
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]


  namespace :api, defaults: { format: :json } do#, constraints: { subdomain: 'api' }, path: '' do
    scope module: :v1, constrains: ApiConstraints.new(version: 1, default: true) do
      # We are going to list our resources here
      resources :restaurants, only: [:show, :index, :create, :new, :destroy, :update] do
        resources :locations, only: [:index]
      end
      resources :locations, only: [:show, :index, :create, :new, :destroy, :update]
      resources :tags, only: [:show, :index, :create, :new, :destroy, :update] do
        resources :restaurants, only: [:index]
      end
    end
  end
end
