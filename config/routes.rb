require 'api_constraints'

Rails.application.routes.draw do
  mount Knock::Engine => "/knock"


  root 'sessions#new'

  resources :apps, only: [:index, :create, :new, :destroy]
  resources :admins, only: [:index]
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]


  namespace :api, defaults: { format: :json } do
    scope module: :v1, constrains: ApiConstraints.new(version: 1, default: true) do

      resources :restaurants, only: [:show, :index, :create, :new, :destroy, :update] do
        resources :locations, only: [:index]
        resources :tags, only: [:index]
      end
      resources :locations, only: [:show, :index, :create, :new, :destroy, :update]
      resources :tags, only: [:show, :index, :create, :new, :destroy, :update] do
        resources :restaurants, only: [:index]
      end
      resources :creators, only: [:show, :index] do
        resources :restaurants, only: [:index]
      end

      get    'creator_by_email'                  => 'creators#creator_by_email'

    end
  end
end
