class SessionsController < ApplicationController

  def new
    @user = User.new
    @user.email = cookies[:email]
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    input_email = params[:user][:email]
    if User.exists?(email: input_email)
      @user = User.find_by(email: input_email)
      if @user.password === params[:user][:password]
        flash[:notice] = "You're signed in!"
        session[:user_id] = @user.id
        cookies[:email] = @user.email
        redirect_to @user
      else
        flash[:alert] = "Wrong password!"
        redirect_to new_session_path
      end
    else
      flash[:alert] = "That user doesn't exist!"
      redirect_to new_session_path
    end
  end

  def destroy
    reset_session
    flash[:notice] = "You're signed out!"
    redirect_to :root
  end

end
