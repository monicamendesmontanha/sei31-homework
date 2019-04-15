class RockPaperScissorsController < ApplicationController
  def index
  end

  def throw
    @user_choice = params[:throw]
  end
end
