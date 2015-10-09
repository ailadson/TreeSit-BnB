Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json} do
    resources :trees, only: [:index, :create]
  end
end
