Rails.application.routes.draw do
  get 'admin/index'
  resources :admin
  resources :slogans
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'stylish_portfolios/index'

  root 'stylish_portfolios#index'
end
