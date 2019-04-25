Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "staticpages#root"
  namespace :api, default: {format: :json} do
    resources :jobs, only: [:create, :index]
    resources :trucks, only: [:create, :index]
  end
end
