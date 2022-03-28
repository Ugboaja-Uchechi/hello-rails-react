class V1::GreetingsController < ApplicationController
  @greetings = Greeting.find(Greeting.pluck(:id).sample)
  render json: {
    greetings: @greetings
}.to_json
end
