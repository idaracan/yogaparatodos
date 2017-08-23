class StylishPortfoliosController < ApplicationController
  layout "stylish_portfolio"

  def index
    @eslogan = Slogan.last
    @description = Description.last
    @bio1 = Biography.find {|h| h.id == 1}
    @bio2 = Biography.find {|h| h.id == 2}
  end
end
