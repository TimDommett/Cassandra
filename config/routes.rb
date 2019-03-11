Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # namespace :api, defaults: { format: :json } do
    resources :users do
      resources :posts, only: [:index]
    end

    resource :session, only: [:new, :create, :destroy]

    post '/search', to: 'users#search'

    resources :posts
    resources :votes, only: [:create, :destroy]
    delete '/votes', to: 'votes#destroy'
    resources :comments
  # end
  # root to: 'root#root'
end
