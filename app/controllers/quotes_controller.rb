class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
    render json: @quotes.to_json
  end
end
