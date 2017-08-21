class SlogansController < ApplicationController

  def new
  end

  def create
    #render plain: params[:slogan].inspect
    @slogan = Slogan.new(slogan_params)
    @slogan.save
    redirect_to root_path
  end
  private
  def slogan_params
    params.require(:slogan).permit(:text)
  end
end
