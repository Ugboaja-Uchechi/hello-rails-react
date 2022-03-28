class Api::V1::GreetingsController < ApplicationController
  def random
    offset = rand(1..Greeting.count)
    @greeting = Greeting.find(offset)
    render json: {
      message: @greeting.message.to_s
    }.to_json
  end
end
