class StylishPortfoliosController < ApplicationController
  layout "stylish_portfolio"

  def index
    @eslogan = Slogan.last
    @description = Description.last
  end
end
