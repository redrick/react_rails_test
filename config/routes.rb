Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  scope '/api' do
    resources :quotes, only: [:index]
  end
end
