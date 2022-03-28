Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do 
     get 'random', to: 'greetings#random'
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
  !req.xhr? && req.format.html?
end
root 'static#index'

  # namespace :v1, defaults: { format: 'json' } do
  #   get 'greetings', to: 'greetings#index'
  # end

  # get '*page', to: 'static#index', constraints: ->(req) do
  #   !req.xhr? && req.format.html?
  # end

  # root 'static#index'
end
