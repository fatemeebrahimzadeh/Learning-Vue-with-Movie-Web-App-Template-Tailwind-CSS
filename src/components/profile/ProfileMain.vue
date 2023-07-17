<template>
  <main class="py-10">
    <div class="container flex justify-center items-center -mt-52 lg:-mt-48">
      <section
        class="signup-content bg-light-backgroundColor dark:bg-dark-secondary dark:border-2 border-dark-800 w-full flex flex-col items-center p-5"
      >
        <h1 class="hidden text-black text-2xl font-dosis">PROFILE</h1>

        <ul class="flex flex-row justify-around w-full">
          <li class="single-movie-tab hidden sm:block">
            <a> FAVORITE MOVIES </a>
          </li>
          <li class="single-movie-tab">
            <div
              class="w-28 h-28 rounded-full bg-white dark:bg-dark-triority flex justify-center items-center -mt-14"
            >
              <label for="fileInput" class="cursor-pointer">
                <i class="fa fa-fw fa-md fa-camera"></i>
              </label>
              <input id="fileInput" type="file" class="sr-only" />
            </div>
          </li>
          <li class="single-movie-tab hidden sm:block">
            <a>WATCH LIST</a>
          </li>
        </ul>

        <form class="w-full p-5">
          <label for="username">USERNAME:</label>
          <input
            name="username"
            type="text"
            value="fatemeebrahimzadeh"
            class="profile-input"
            required
          />
          <label for="email">YOUR EMAIL:</label>
          <input
            name="email"
            type="email"
            disabled
            class="profile-input disabled"
            value="fateme.ebrahimzadeh20@gmail.com"
            required
          />
          <label for="firstname">FIRSTNAME:</label>
          <input name="firstname" type="text" value="fateme" class="profile-input" required />
          <label for="lastname">LASTNAME:</label>
          <input name="lastname" type="text" value="ebrahimzade" class="profile-input" required />
          <label for="address">ADDRESS:</label>
          <input
            name="address"
            type="text"
            value="ISF, Bahonar st. "
            class="profile-input"
            required
          />
          <label for="phone-number">PHONE NUMBER:</label>
          <input
            name="phone-number"
            type="text"
            value="+98 913 *** 7798"
            class="profile-input"
            required
          />
          <label for="password">PASSWORD:</label>
          <input name="password" type="password" class="profile-input" required />
          <label for="retype-password">RE-TYPE PASSWORD:</label>
          <input name="retype-password" type="password" class="profile-input" required />
          <button class="w-full bg-red px-5 py-3 text-white" type="submit">EDIT PROFILE</button>
        </form>
      </section>
    </div>
  </main>
</template>
