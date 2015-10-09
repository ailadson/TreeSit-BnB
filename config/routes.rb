Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :trees, only: [:index, :create]
  end
end
